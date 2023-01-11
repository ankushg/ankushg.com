// based on the following:
// https://github.com/cloudsecurityalliance/webfinger-cloudflare-worker
// https://github.com/IDisposable/cloudfinger

const redirectMap = new Map([
  ['me@ankushg.com', '@ankushg@mastodon.social']
]);

async function onRequest(context) {
  const request = context.request;

  const requestURL = new URL(request.url);
  const resourceKey = requestURL.searchParams.get('resource');

  if (resourceKey === null) {
    return new Response('No resource requested', { status: 400 });
  }

  const email = resourceKey.replace(/^(acct:)*@*/, '');
  const value = redirectMap.get(email);

  if (value === null) {
    return new Response(`Not found: ${email}`, { status: 404 });
  }

  const resourceArray = resourceData.split("@");
  if (resourceArray.length !== 3) {
    return new Response(`Invalid translation: ${resourceData}`, { status: 500 });
  }

  // this should be blank const prefix = resourceArray[0];
  const username = resourceArray[1];
  const hostname = resourceArray[2];

  const jsonData = `{
      "subject":"acct:${email}",
      "aliases":[
        "https://${hostname}/@${username}",
        "https://${hostname}/users/${username}"
      ],
      "links":[
        {"rel":"http://webfinger.net/rel/profile-page","type":"text/html","href":"https://${hostname}/@${username}"},
        {"rel":"self","type":"application/activity+json","href":"https://${hostname}/users/${username}"},
        {"rel":"http://ostatus.org/schema/1.0/subscribe","template":"https://${hostname}/authorize_interaction?uri={uri}"}
      ]
    }`;

  return new Response(jsonData, {
    headers: {
      'worker': `'${name} ${version}'`,
      'content-type': 'application/jrd+json; charset=utf-8',
    },
  });
}

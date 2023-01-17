declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof (typeof entryMap)[C]>(
		collection: C,
		entryKey: E
	): Promise<(typeof entryMap)[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof (typeof entryMap)[C]
	>(
		collection: C,
		filter?: (data: (typeof entryMap)[C][E]) => boolean
	): Promise<((typeof entryMap)[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"posts": {
"2018-08-03-tls-1.2-on-android.md": {
  id: "2018-08-03-tls-1.2-on-android.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"2019-10-20-multiplatform-parcelize.md": {
  id: "2019-10-20-multiplatform-parcelize.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"2019-11-27-shared-code-kotlin-multiplatform.md": {
  id: "2019-11-27-shared-code-kotlin-multiplatform.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"2020-08-31-quizlet-kotlin-multiplatform-case-study.md": {
  id: "2020-08-31-quizlet-kotlin-multiplatform-case-study.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"2021-08-31-write-once-run-anywhere-increment.md": {
  id: "2021-08-31-write-once-run-anywhere-increment.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
},
"projects": {
"2014-06-22-kobal.md": {
  id: "2014-06-22-kobal.md",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2014-08-01-nunchuck.md": {
  id: "2014-08-01-nunchuck.md",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2015-01-18-skipchat.md": {
  id: "2015-01-18-skipchat.md",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2015-05-01-hydra.md": {
  id: "2015-05-01-hydra.md",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2015-05-01-zauberflote.md": {
  id: "2015-05-01-zauberflote.md",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2016-05-01-thesis.md": {
  id: "2016-05-01-thesis.md",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
},
"speaking": {
"2019-07-03-droidcon-berlin-2019.md": {
  id: "2019-07-03-droidcon-berlin-2019.md",
  slug: string,
  body: string,
  collection: "speaking",
  data: InferEntrySchema<"speaking">
},
"2019-09-17-denver-startup-week-2019.md": {
  id: "2019-09-17-denver-startup-week-2019.md",
  slug: string,
  body: string,
  collection: "speaking",
  data: InferEntrySchema<"speaking">
},
"2019-11-07-sf-kotlin-meetup-2019.md": {
  id: "2019-11-07-sf-kotlin-meetup-2019.md",
  slug: string,
  body: string,
  collection: "speaking",
  data: InferEntrySchema<"speaking">
},
"2019-11-26-droidcon-sf-2019.md": {
  id: "2019-11-26-droidcon-sf-2019.md",
  slug: string,
  body: string,
  collection: "speaking",
  data: InferEntrySchema<"speaking">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}

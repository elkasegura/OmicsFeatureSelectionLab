import { createFileRoute, Link } from "@tanstack/react-router";
import { DATASETS } from "@/lib/datasets";

export const Route = createFileRoute("/database")({
  head: () => ({
    meta: [
      { title: "Datasets — Omics datasets | OmicsFeatureSelectionLab" },
      {
        name: "description",
        content:
          "Repository of omics datasets in .mat format used in the project, with description, number of samples, features and classes.",
      },
      { property: "og:title", content: "Datasets — Omics datasets | OmicsFeatureSelectionLab" },
      {
        property: "og:description",
        content: "Omics .mat datasets available for feature selection.",
      },
    ],
  }),
  component: DatabasePage,
});

function DatabasePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-bold">Datasets</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Omics datasets considered in this project.
      </p>

      <div className="mt-8 space-y-5">
        {DATASETS.map((d) => (
          <article key={d.id} className="panel p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">{d.name}</h2>
                <p className="mt-0.5 font-mono text-xs text-primary">{d.omics}</p>
              </div>
              {/*<code className="rounded bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground">
                {d.file}
              </code>*/}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
            <dl className="mt-5 grid grid-cols-3 gap-4 border-t border-border pt-4 text-sm">
              <div>
                <dt className="rounded bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground uppercase">                     
                  Samples
                </dt>
                <dd className="mt-1 font-semibold">{d.samples}</dd>
              </div>
              <div>
                <dt className="rounded bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground uppercase">
                  Features
                </dt>
                <dd className="mt-1 font-semibold">{d.features}</dd>
              </div>
              <div>
                <dt className="rounded bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground uppercase">
                  Classes
                </dt>
                <dd className="mt-1 font-semibold">{d.classes}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <Link
        to="/analyses"
        className="mt-8 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Analyse a dataset
      </Link>
    </div>
  );
}

export interface DatasetMeta {
  id: string;
  name: string;
  omics: string;
  samples: number;
  features: number;
  classes: string;
  file: string;
  description: string;
}

export const DATASETS: DatasetMeta[] = [
  {
    id: "colon",
    name: "Colon Cancer",
    omics: "Transcriptomics (microarray, Affymetrix HU6000)",
    samples: 62,
    features: 2000,
    classes: "tumor (40) / normal (22)",
    file: "python/datasets/colon.mat",
    description: "Alon, U., Barkai, N., Notterman, D. A., Gish, K., Ybarra, S., Mack, D., & Levine, A. J. (1999). Broad patterns of gene expression revealed by clustering analysis of tumor and normal colon tissues probed by oligonucleotide arrays. Proceedings of the National Academy of Sciences, 96(12), 6745–6750. DOI: 10.1073/pnas.96.12.6745",
  },
  {
    id: "madelon",
    name: "Madelon",
    omics: "Artificial dataset",
    samples: 2600,
    features: 500,
    classes: "-1 (1300) / 1 (1300)",
    file: "python/datasets/madelon.mat",
    description: "Guyon, I., Gunn, S., Ben-Hur, A., & Dror, G. (2004). Result Analysis of the NIPS 2003 Feature Selection Challenge. Advances in Neural Information Processing Systems, 17, 545–552",
  },
  {
  id: "usps",
  name: "USPS",
  omics: "Handwritten digit images (16×16 grayscale)",
  samples: 9298,
  features: 256,
  classes: "10 classes (digits 0–9)",
  file: "python/datasets/USPS.mat",
  description:
    "Hull, J. J. (1994). A database for handwritten text recognition research. IEEE Transactions on Pattern Analysis and Machine Intelligence, 16(5), 550–554. https://doi.org/10.1109/34.291440",
  },

  {
  id: "gli-85",
  name: "GLI-85",
  omics: "Transcriptomics (microarray, Affymetrix HG-U133A)",
  samples: 85,
  features: 22283,
  classes: "Grade III glioma (26) / Grade IV glioma (59)",
  file: "python/datasets/GLIOMA.mat",
  description:
    "Freije, W. A., Castro-Vargas, F. E., Fang, Z., Horvath, S., Cloughesy, T., Liau, L. M., Mischel, P. S., & Nelson, S. F. (2004). Gene expression profiling of gliomas strongly predicts survival. Cancer Research, 64(18), 6503–6510. https://doi.org/10.1158/0008-5472.CAN-04-0452",
  },
  {
    id: "orlraws10p",
    name: "ORL Raws 10P",
    omics: "Face images (raw grayscale pixels)",
    samples: 100,
    features: 10304,
    classes: "10 subjects (10 images per subject)",
    file: "python/datasets/orlraws10P.mat",
    description:
      "Samaria, F. S., & Harter, A. C. (1994). Parameterisation of a stochastic model for human face identification. Proceedings of the 2nd IEEE Workshop on Applications of Computer Vision, 138–142. https://doi.org/10.1109/ACV.1994.341300",
    },
  {
    id: "coil20",
    name: "COIL20",
    omics: "Object images (grayscale)",
    samples: 1440,
    features: 1024,
    classes: "20 object classes (72 images per object)",
    file: "python/datasets/COIL20.mat",
    description:
    "Nene, S. A., Nayar, S. K., & Murase, H. (1996). Columbia Object Image Library (COIL-20). Technical Report CUCS-005-96, Columbia University.",
  },
  {
    id: "pixraw10p",
    name: "Pixraw 10P",
    omics: "Face images (raw pixels)",
    samples: 100,
    features: 10000,
    classes: "10 face classes",
    file: "python/datasets/pixraw10P.mat",
    description:
    "Li, J., Cheng, K., Wang, S., Morstatter, F., Trevino, R. P., Tang, J., & Liu, H. (2017). Feature selection: A data perspective. ACM Computing Surveys, 50(6), Article 94. https://doi.org/10.1145/3136625",
  },
  {
    id: "glioma",
    name: "GLIOMA",
    omics: "Transcriptomics (microarray, Affymetrix U95Av2)",
    samples: 50,
    features: 4434,
    classes: "Classic glioblastoma (14) / Classic anaplastic oligodendroglioma (7) / Nonclassic glioblastoma (14) / Nonclassic anaplastic oligodendroglioma (15)",
    file: "python/datasets/GLIOMA.mat",
    description:
    "Nutt, C. L., Mani, D. R., Betensky, R. A., Tamayo, P., Cairncross, J. G., Ladd, C., et al. (2003). Gene expression-based classification of malignant gliomas correlates better with survival than histological classification. Cancer Research, 63(7), 1602–1607.",
  },
  {
    id: "isolet",
    name: "Isolet",
    omics: "Spoken letter recognition (acoustic features)",
    samples: 1560,
    features: 617,
    classes: "26 classes (A–Z; 60 samples per class)",
    file: "python/datasets/Isolet.mat",
    description:
    "Cole, R., & Fanty, M. (1991). ISOLET [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C51G69",
  },
  {
    id: "leukemia",
    name: "Leukemia",
    omics: "Transcriptomics (microarray, Affymetrix Hu6800)",
    samples: 72,
    features: 7070,
    classes: "ALL (47) / AML (25)",
    file: "python/datasets/leukemia.mat",
    description:
    "Golub, T. R., Slonim, D. K., Tamayo, P., Huard, C., Gaasenbeek, M., Mesirov, J. P., Coller, H., Loh, M. L., Downing, J. R., Caligiuri, M. A., Bloomfield, C. D., & Lander, E. S. (1999). Molecular classification of cancer: Class discovery and class prediction by gene expression monitoring. Science, 286(5439), 531–537. https://doi.org/10.1126/science.286.5439.531",
  },
  {
    id: "basehock",
    name: "BASEHOCK",
    omics: "Text classification (20 Newsgroups)",
    samples: 1993,
    features: 4862,
    classes: "Baseball (994) / Hockey (999)",
    file: "python/datasets/BASEHOCK.mat",
    description:
    "Lang, K. (1995). NewsWeeder: Learning to filter netnews. Proceedings of the Twelfth International Conference on Machine Learning, 331–339.",
  },
  {
    id: "lymphoma",
    name: "Lymphoma",
    omics: "Transcriptomics (cDNA microarray, Lymphochip)",
    samples: 96,
    features: 4026,
    classes: "9 lymphocyte classes",
    file: "python/datasets/lymphoma.mat",
    description:
    "Alizadeh, A. A., Eisen, M. B., Davis, R. E., Ma, C., Lossos, I. S., Rosenwald, A., et al. (2000). Distinct types of diffuse large B-cell lymphoma identified by gene expression profiling. Nature, 403, 503–511. https://doi.org/10.1038/35000501",
  },
  {
    id: "lung-small",
    name: "Lung Small",
    omics: "Transcriptomics (Affymetrix HG-U133A)",
    samples: 73,
    features: 325,
    classes: "7 classes (6 / 5 / 5 / 16 / 7 / 13 / 21)",
    file: "python/datasets/lung_small.mat",
    description:
    "Peng, H., Long, F., & Ding, C. (2005). Feature selection based on mutual information criteria of max-dependency, max-relevance, and min-redundancy. IEEE Transactions on Pattern Analysis and Machine Intelligence, 27(8), 1226–1238. https://doi.org/10.1109/TPAMI.2005.159",
  },
  {
    id: "smk-can-187",
    name: "SMK-CAN-187",
    omics: "Transcriptomics (microarray, Affymetrix HG-U133A)",
    samples: 187,
    features: 19993,
    classes: "Lung cancer (90) / No lung cancer (97)",
    file: "python/datasets/SMK_CAN_187.mat",
    description:
    "Spira, A., Beane, J. E., Shah, V., Steiling, K., Liu, G., Schembri, F., et al. (2007). Airway epithelial gene expression in the diagnostic evaluation of smokers with suspect lung cancer. Nature Medicine, 13, 361–366. https://doi.org/10.1038/nm1556",
  },
  {
    id: "pcmac",
    name: "PCMAC",
    omics: "Text classification (20 Newsgroups)",
    samples: 1943,
    features: 3289,
    classes: "Comp.sys.mac.hardware (982) / Comp.windows.x (961)",
    file: "python/datasets/PCMAC.mat",
    description:
    "Lang, K. (1995). NewsWeeder: Learning to filter netnews. Proceedings of the Twelfth International Conference on Machine Learning, 331–339.",
  },
  {
    id: "relathe",
    name: "RELATHE",
    omics: "Text classification (20 Newsgroups)",
    samples: 1427,
    features: 4322,
    classes: "Religion (779) / Atheism (648)",
    file: "python/datasets/RELATHE.mat",
    description: "Lang, K. (1995). NewsWeeder: Learning to filter netnews. Proceedings of the Twelfth International Conference on Machine Learning, 331–339.",
  },
];

export interface ModelParameterMeta {
  id: string;
  label: string;
  defaultValue: number | string;
  type?: "number" | "select";
  min?: number;
  max?: number;
  step?: number;
  options?: string[];
}

interface FeatureSelectionModelDefinition {
  name: string;
  full: string;
  description: string;
  usesClusters: boolean;
  usesEpochs: boolean;
  defaultEpochs?: number;
  dependency?: string;
  parameters: ModelParameterMeta[];
}

const MODEL_DEFINITIONS = {
  mcfs: {
    name: "MCFS",
    full: "Multi-Cluster Feature Selection",
    description:
      "Spectral multi-cluster feature selection with an affinity graph and L1-regularized regressions. Implemented as a Python class with the common model interface.",
    usesClusters: true,
    usesEpochs: false,
    parameters: [],
  },
  ndfs: {
    name: "NDFS",
    full: "Nonnegative Discriminative Feature Selection",
    description:
      "Unsupervised spectral feature selection using nonnegative pseudo-labels, graph regularization and an L2,1 penalty.",
    usesClusters: true,
    usesEpochs: false,
    parameters: [
      { id: "alpha", label: "alpha", defaultValue: 1, type: "number", min: 0, step: 0.001 },
      { id: "beta", label: "beta", defaultValue: 1, type: "number", min: 0, step: 0.001 },
      { id: "gamma", label: "gamma", defaultValue: 1e9, type: "number", min: 0, step: 1 },
    ],
  },
  aefs: {
    name: "AEFS",
    full: "Autoencoder Inspired Feature Selection",
    description:
      "One-hidden-layer autoencoder with row-wise L2,1 sparsity on encoder weights and proximal optimization.",
    usesClusters: false,
    usesEpochs: true,
    defaultEpochs: 100,
    parameters: [
      { id: "hidden", label: "Hidden", defaultValue: 128, type: "number", min: 1, step: 1 },
      { id: "alpha", label: "alpha", defaultValue: 0.01, type: "number", min: 0, step: 0.001 },
      { id: "beta", label: "beta", defaultValue: 0.01, type: "number", min: 0, step: 0.001 },
      { id: "lr", label: "Learning rate", defaultValue: 0.001, type: "number", min: 0.000001, step: 0.0001 },
    ],
  },
  dga: {
    name: "DGA",
    full: "Differentiable Gated Autoencoder",
    description:
      "Autoencoder with stochastic differentiable gates and a regularized objective for unsupervised feature selection.",
    usesClusters: false,
    usesEpochs: true,
    defaultEpochs: 50,
    parameters: [
      { id: "hidden", label: "Hidden", defaultValue: 20, type: "number", min: 1, step: 1 },
      { id: "gamma", label: "gamma", defaultValue: 0.1, type: "number", min: 0, step: 0.001 },
      { id: "lam", label: "lambda", defaultValue: 0.1, type: "number", min: 0, step: 0.001 },
      { id: "lr", label: "Learning rate", defaultValue: 0.001, type: "number", min: 0.000001, step: 0.0001 },
      { id: "optimizer", label: "Optimizer", defaultValue: "sgd", type: "select", options: ["sgd", "adam"] },
    ],
  },
  drae: {
    name: "DRAE",
    full: "Deep Robust Autoencoder",
    description:
      "Robust autoencoder feature selection coupled to a clustering objective and L2,1 regularization.",
    usesClusters: true,
    usesEpochs: true,
    defaultEpochs: 100,
    parameters: [
      { id: "d_hidden", label: "Hidden", defaultValue: 10, type: "number", min: 1, step: 1 },
      { id: "alpha", label: "alpha", defaultValue: 1e8, type: "number", min: 0, step: 1 },
      { id: "beta", label: "beta", defaultValue: 0.001, type: "number", min: 0, step: 0.001 },
      { id: "gamma", label: "gamma", defaultValue: 0.01, type: "number", min: 0, step: 0.001 },
      { id: "zeta", label: "zeta", defaultValue: 100, type: "number", min: 0, step: 0.1 },
      { id: "lam", label: "lambda", defaultValue: 10000, type: "number", min: 0, step: 1 },
    ],
  },
  rfae: {
    name: "RFAE",
    full: "Robust Fractal AutoEncoder",
    description:
      "Learns trainable feature weights, progressively reduces the active feature window and reconstructs the input.",
    usesClusters: false,
    usesEpochs: true,
    defaultEpochs: 100,
    parameters: [
      { id: "batch_size", label: "Batch size", defaultValue: 16, type: "number", min: 1, step: 1 },
    ],
  },
  smlae: {
    name: "SMLAE",
    full: "Sparse Manifold Learning AutoEncoder",
    description:
      "Sparse autoencoder feature selection with sample-manifold and latent-structure regularization.",
    usesClusters: true,
    usesEpochs: true,
    defaultEpochs: 100,
    parameters: [
      { id: "d_hidden", label: "Hidden", defaultValue: 20, type: "number", min: 1, step: 1 },
      { id: "n_neighbors", label: "Neighbors", defaultValue: 5, type: "number", min: 1, step: 1 },
      { id: "alpha", label: "alpha", defaultValue: 1e-6, type: "number", min: 0, step: 0.000001 },
      { id: "beta", label: "beta", defaultValue: 0.001, type: "number", min: 0, step: 0.001 },
      { id: "gamma", label: "gamma", defaultValue: 0.001, type: "number", min: 0, step: 0.001 },
      { id: "omega", label: "omega", defaultValue: 0.001, type: "number", min: 0, step: 0.001 },
      { id: "rho1", label: "rho1", defaultValue: 1e-6, type: "number", min: 0, step: 0.000001 },
      { id: "rho2", label: "rho2", defaultValue: 1e-6, type: "number", min: 0, step: 0.000001 },
    ],
  },
} satisfies Record<string, FeatureSelectionModelDefinition>;

export type FeatureSelectionModelId = keyof typeof MODEL_DEFINITIONS;

export interface FeatureSelectionModelMeta extends FeatureSelectionModelDefinition {
  id: FeatureSelectionModelId;
}

export const FEATURE_SELECTION_MODEL_IDS = Object.keys(MODEL_DEFINITIONS) as [
  FeatureSelectionModelId,
  ...FeatureSelectionModelId[],
];

export const MODELS: FeatureSelectionModelMeta[] = FEATURE_SELECTION_MODEL_IDS.map((id) => ({
  id,
  ...MODEL_DEFINITIONS[id],
}));



export const CLASSIFIERS = [
  { id: "rf", name: "Random Forest" },
  { id: "xgboost", name: "Gradient Boosting" },
] as const;

export type ClassifierId = (typeof CLASSIFIERS)[number]["id"];

export const CLASSIFIER_IDS = CLASSIFIERS.map((classifier) => classifier.id) as [
  ClassifierId,
  ...ClassifierId[],
];

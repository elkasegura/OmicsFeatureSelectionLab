# OmicsFeatureSelectionLab

Web application for running unsupervised feature selection methods on high-dimensional omics data and validating the selected feature subset using classifiers.

## Architecture

The scientific implementation of the models resides exclusively in Python:

React / TanStack Start
        |
        v
src/lib/analysis.functions.ts
        |
        v
src/lib/pipeline.server.ts
        |
        v
src/lib/python-models.server.ts
        | JSON stdin/stdout
        v
python/runner.py
        |
        v
python/models/registry.py       # Dispatch/configuration only
        |
        |-- MCFS.py
        |-- NDFS.py
        |-- AEFS.py
        |-- DGA.py
        |-- DRAE.py
        |-- RFAE.py
        |-- SMLAE.py

There are no TypeScript ports of the feature selection algorithms or *Adapter classes that reimplement a second interface for the models.

## Models

- MCFS — Multi-Cluster Feature Selection
- NDFS — Nonnegative Discriminative Feature Selection
- AEFS — Autoencoder Inspired Feature Selection
- DGA — Differentiable Gated Autoencoder
- DRAE — Deep Robust Autoencoder
- RFAE — Robust Feature AutoEncoder
- SMLAE — Sparse Manifold Learning AutoEncoder

python/models/construct_W.py is the only implementation of the affinity graph used by MCFS/NDFS.

python/models/Functions.py contains the provided top_k_keepWeights_1 function for RFAE. RFAE.py imports it directly and does not maintain a separate NumPy implementation of that function.

## Installation

### JavaScript

npm install
npm run dev

### Python

python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r python/requirements.txt

To specify the Python interpreter used by the server:

export OMICSLAB_PYTHON=/path/to/.venv/bin/python
npm run dev

## Python Protocol

python/runner.py receives a JSON object via stdin, executes the requested model through python/models/registry.py, and returns a score for each feature, the descending feature ranking, and the seed used via stdout.

Training logs are redirected to stderr to prevent interference with the JSON response.

## Reproducibility

All runs use a fixed global random seed of 42.

The server sets PYTHONHASHSEED and configures NumPy, Python's random module, PyTorch, and TensorFlow/Keras with the same seed. It enables deterministic operations whenever supported by the framework and disables unnecessary sources of randomness, such as RFAE's validation shuffling.

The classifier and SHAP estimator also use pseudorandom sequences derived from seed 42.

Given the same dataset, model, and parameters, clicking RUN again should produce identical feature rankings and scores.

## Datasets

Built-in datasets are stored only once as .mat files in python/datasets/.

python/dataset_runner.py loads them using SciPy and provides X, Y, and feature names to the server. No JSON copies of the datasets are maintained.

The repository includes Colon and the 15 datasets provided in data.zip:

- Madelon
- USPS
- GLI-85
- ORL Raws 10P
- COIL20
- Pixraw 10P
- GLIOMA
- Isolet
- Leukemia
- BASEHOCK
- Lymphoma
- Lung Small
- SMK-CAN-187
- PCMAC
- RELATHE

Uploaded CSV files must contain samples as rows and features as columns.

If labels are included, the interface recognizes a column named y, label, class, or target. Labels may be numeric or categorical text values and are encoded internally.

Validation using Random Forest or Gradient Boosting supports both binary and multiclass classification.

Accuracy is calculated globally, while Precision, Recall, and F1 are reported using macro averaging across classes, ensuring that each category contributes equally.

Cross-validation is stratified, with up to 5 folds, limited by the number of samples in the minority class.

## Build

npm run build

In production, the server process must have access to the python/ directory and a Python environment with all dependencies listed in python/requirements.txt installed.
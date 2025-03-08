# XesmonaUi

✨ Welcome to **XesmonaUi**, an Angular-based **UI component library** managed with **Nx**.

This monorepo includes:

- **Angular components library** (`ui-components`)
- **Storybook integration** for visual testing
- **Nx workspace tools** for efficient development

---

## 🚀 Getting Started

### 📦 Install Dependencies

```sh
npm install
```

### ▶️ Run the Development Server

To start a local development server:

```sh
npx nx serve xesmona-ui
```

### 🛠️ Build for Production

To generate a production-ready build:

```sh
npx nx build xesmona-ui
```

### 📚 Run Storybook (Component Library)

To preview components in **Storybook**, use:

```sh
npx nx run ui-components:storybook
```

or simply:

```sh
npx nx storybook ui-components
```

✔️ **Access it at**: [`http://localhost:6006`](http://localhost:4400)

---

## 🔧 Available Nx Commands

### 🔍 View Available Tasks

To see all commands available for a project:

```sh
npx nx show project xesmona-ui
```

### 📊 Visualize the Project Graph

```sh
npx nx graph
```

This helps you **understand dependencies** in the monorepo.

---

## 🎨 Generating New Components

### 📌 Add a New Component to `ui-components`

```sh
npx nx g @nx/angular:component my-new-component --project=ui-components
```

### 📌 Generate a New Angular Library

```sh
npx nx g @nx/angular:lib mylib
```

### 📌 Generate a New Angular App

```sh
npx nx g @nx/angular:app demo
```

---

## 🛠️ Continuous Integration (CI)

### ✅ Step 1: Connect to Nx Cloud

```sh
npx nx connect
```

### ✅ Step 2: Generate a CI Workflow

```sh
npx nx g ci-workflow
```

**Nx Cloud** improves performance with:

- **Remote caching** for faster builds
- **Parallel execution** of tasks

---

## 🛠️ Developer Tools

### 📌 Install Nx Console for VS Code

Nx Console is an **IDE plugin** that helps run commands easily. [Install Nx Console →](https://nx.dev/getting-started/editor-setup)

---

## 🔗 Useful Links

- [Nx Documentation](https://nx.dev)
- [Nx Plugins & Features](https://nx.dev/concepts/nx-plugins)
- [Nx on CI/CD](https://nx.dev/ci/intro/ci-with-nx)
- [Nx Blog](https://nx.dev/blog)
- [Storybook Docs](https://storybook.js.org/docs/angular/get-started/introduction)

📢 **Join the Nx Community:**

- 💬 [Discord](https://go.nx.dev/community)
- 🐦 [Follow on X](https://twitter.com/nxdevtools)
- 🎥 [YouTube](https://www.youtube.com/@nxdevtools)


# React TypeScript Demo

一个基于 [Create React App](https://create-react-app.dev/) 的 React TypeScript 应用示例项目。使用 React Scripts 和 TypeScript 构建传统的 React 单页应用。

## 技术栈

- **React**: 16.14.0
- **TypeScript**: 4.9.5
- **React Scripts**: 5.0.1
- **Fusion Design**: @alifd/next 1.27.32
- **Moment.js**: 2.30.1
- **Testing Library**: 完整的测试工具链

## 项目结构

```
react-ts-demo/
├── src/
│   ├── App.tsx            # 主应用组件
│   ├── index.tsx          # 应用入口
│   ├── index.css          # 全局样式
│   └── components/        # React 组件
├── public/                # 静态资源
├── package.json           # 项目依赖配置
├── tsconfig.json          # TypeScript 配置
└── README.md
```

## 功能特性

- React 16 支持
- TypeScript 类型安全
- Fusion Design 组件库
- 完整的测试工具链
- Web Vitals 性能监控
- 热重载开发体验

## 快速开始

### 前置要求

- Node.js 14 或更高版本
- npm 或 yarn

### 安装和运行

```bash
# 克隆项目
git clone <repository-url>
cd react-ts-demo

# 安装依赖
npm install
# 或
yarn install

# 运行开发服务器
npm start
# 或
yarn start
```

应用将在 `http://localhost:3000` 启动。

### 构建和测试

```bash
# 构建生产版本
npm run build

# 运行测试
npm test

# 弹出配置（不推荐，除非必要）
npm run eject
```

## 项目特点

### Create React App

使用 Create React App (CRA) 作为基础：
- 零配置设置
- 开箱即用的工具链
- Webpack 配置已优化
- 生产就绪的构建

### TypeScript 支持

完整的 TypeScript 集成：
- 类型检查
- 自动完成
- 重构支持
- 编译时错误检测

### Fusion Design

集成阿里巴巴的 Fusion Design 组件库：
- 丰富的企业级组件
- 一致的设计语言
- TypeScript 类型定义

## 开发

### 热重载

CRA 提供快速刷新功能，修改代码会自动更新。

### 环境变量

支持环境变量配置：

```bash
# .env
REACT_APP_API_URL=https://api.example.com
```

### 代理配置

可以在 `package.json` 中配置代理：

```json
{
  "proxy": "http://localhost:4000"
}
```

## 测试

### 运行测试

```bash
npm test
```

使用 Jest 和 React Testing Library：
- 单元测试
- 集成测试
- 快照测试
- 覆盖率报告

### 测试示例

```typescript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## 构建和部署

### 生产构建

```bash
npm run build
```

构建输出在 `build` 目录，包含：
- 优化的 JavaScript 和 CSS
- 代码分割
- 资源优化
- 源映射

### 部署选项

- **Netlify**: 自动部署
- **Vercel**: 零配置部署
- **GitHub Pages**: 静态托管
- **AWS S3 + CloudFront**: 企业级部署

## 性能优化

### Web Vitals

项目集成了 Web Vitals 监控：
- Core Web Vitals 指标
- 性能报告
- 用户体验指标

### 代码分割

CRA 自动进行代码分割：
- 路由级别的分割
- 动态导入支持
- 懒加载组件

## 参考资源

- [Create React App 文档](https://create-react-app.dev/)
- [React 文档](https://react.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [Fusion Design](https://fusion.design/)

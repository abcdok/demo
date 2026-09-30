# demo

一个轻量的公开示例仓库，用来熟悉 Git 工作流：浏览文件、查看历史、在本地做小幅修改。

## 克隆

```bash
git clone https://github.com/abcdok/demo.git
```

## 目录

| 路径 | 说明 |
|------|------|
| `src/` | 示例 TypeScript 源码 |
| `docs/` | Markdown 文档 |
| `config/` | 示例 JSON 配置 |
| `samples/` | 笔记、HTML 等样例 |
| `assets/` | 图片等资源 |
| `scripts/` | Shell 样例 |
| `package.json` | 项目元数据 |

## 分支

| 分支 | 说明 |
|------|------|
| `main` | 默认主线 |
| `feature/demo` | README 分支说明 |
| `feature/docs-en` | 英文文档 |
| `feature/dashboard` | 额外 HTML 仪表盘 |
| `feature/sample-data` | 扩展 JSON 样例 |
| `release/0.3.0` | 版本标记与 CHANGELOG |

## 随便试试

- 打开 `docs/guide.md` 看排版与代码块  
- 在预览里打开 `samples/hello.html`、`assets/demo.png`  
- 改一行 `samples/note.md`，用 `git diff` 看变更  
- 在 `src/` 里走读 `greet` 与 `formatTitle`  
- 切换分支后拉取，对比 `docs/` 与 `samples/` 差异

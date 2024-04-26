import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    // themes: false, // 如果设为 true，则会包含所有的主题。 如果设为 false，则只有白天和黑暗模式的主题。 如果是一个数组，则只有数组包含的主题会被加载，数组的第一个主题会成为默认主题。 在阅读更多关于主题的内容
    themes: ["light", "dark"],
    darkTheme: "dark", // 选择另一个主题作为系统自动黑暗模式的主题。dark 是默认黑暗模式主题（或者自定义的主题名字是 dark）。通过这个配置，你可以给默认黑暗模式主题设定另一个主题。
    base: true, // 如果设为 true，一些基础样式 会被添加。
    styled: true, // 如果设置为 true，组件会有默认的颜色和样式，所以你不需要去进行设计。 如果设为 false，组件是没有颜色和视觉样式的，所以你可以在一个基本的骨架上设计你自己的颜色和视觉样式。
    utils: true, // 如果设为 true，响应式和工具类会被添加
    prefix: "", // 给 daisyUI 的类名称增加一个前缀（包含所有的组件类，修饰类和响应类）。 例如：btn 会变为 prefix-btn。 如果你还使用其他的 CSS 库，并且有冲突，可以用这个方法来避免冲突问题。
    logs: true, // 如果设为 true，daisyUI 会在 CSS 构建时在命令行窗口输出日志。
    themeRoot: ":root", // 将主题 CSS 变量附加到哪个元素。 在某些情况下（例如在 shadow root 中嵌入 daisyUI），将其设置为 * 可能很有用，因此所有组件都可以访问所需的 CSS 变量。
  },
};
export default config;

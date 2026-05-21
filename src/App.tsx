function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '24px',
        background:'var(--colors-neutral-700)',
        color: 'var(--colors-lime-600)',
      }}
    >
      <h1>Token 接入测试</h1>
      <p>如果背景色和文字颜色发生变化，说明 Figma token 已经生效。</p>

      <div
        style={{
          marginTop: '16px',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid var(--colors-lime-600)',
          background: 'var(--state-warning-tag-warning-fillbger)',
        }}
      >
        这是一张使用语义 token 的测试卡片
      </div>
    </main>
  )
}

export default App
function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridAutoRows: '1fr',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        <img src="/images/og-image.png" alt="og-image" width="1200" />
      </div>
    </div>
  );
}

export default App;

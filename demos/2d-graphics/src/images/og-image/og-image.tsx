type OGImageProps = {
  title: string;
  subtitle: string;
};
const OGImage: React.FC<OGImageProps> = ({
  title = 'Hello World',
  subtitle = 'This is a subtitle',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '1200px',
        height: '600px',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(to right, #f43b47, #453a94)',
          borderBottom: '6px solid black',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"
          alt="profilepicture"
          style={{
            position: 'absolute',
            top: '35%',
            left: '2.5%',
            border: '1rem solid rgb(243,244,246)',
            borderRadius: '9999px',
            width: '20%',
          }}
        />

        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '12rem',
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
        >
          <svg
            style={{
              width: '100%',
              height: '12rem',
              fill: 'none',
              color: 'rgb(243,244,246)',
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0H37C75 0 149 0 224 9C299 18 373 36 411 44L448 53V107H411C373 107 299 107 224 107C149 107 75 107 37 107H0V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
          }}
        >
          <h1
            style={{
              fontSize: '2rem',
              color: 'rgb(55,65,81)',
              margin: 0,
            }}
          >
            {title}
          </h1>
          <h2
            style={{
              fontSize: '1rem',
              marginLeft: '0.25rem',
              color: 'rgb(156,163,175)',
              margin: 0,
            }}
          >
            {subtitle}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default OGImage;

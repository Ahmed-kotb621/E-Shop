function Colors({ color, width, height }) {
  return (
    <div className="flex">
      {color === 'Multi-Color' ? (
        ['white', 'red', 'blue', 'green'].map((bgColor, i) => (
          <div
            className="mr-1  rounded-full border "
            style={{
              backgroundColor: `${bgColor}`,
              width: `${width}`,
              height: `${height}`,
            }}
            key={i}
          ></div>
        ))
      ) : (
        <div
          className="mr-1 h-3 w-3 rounded-full border ring-offset-1"
          style={{
            backgroundColor: `${color}`,
            width: `${width}`,
            height: `${height}`,
          }}
        ></div>
      )}
    </div>
  );
}

export default Colors;

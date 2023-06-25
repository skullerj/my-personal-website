function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 text-center p-4">
      <h1 className="text-6xl">Hola!</h1>
      <h2 className="text-lg">
        I&quote;m building my personal webiste here. Please come back later to
        find out how it&quote;s going.
      </h2>
      <h2 className="text-lg">
        On the meantime, you can visit{" "}
        <a
          className="text-blue-600"
          href="https://www.linkedin.com/in/juan-rosero-749547156/?locale=en_US"
        >
          my linked in profile
        </a>
      </h2>
    </div>
  );
}

export default Welcome;

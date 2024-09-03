export const AsyncTask = async () => {
  await fetch("https://fakeresponder.com/?sleep=500", {
    next: { revalidate: 1800 },
  }).then((x) => {
    for (var int = 0; int < 1000000; int++) {
      console.log(int);
    }
  });

  return <div>I have rendered and everything is fine</div>;
};

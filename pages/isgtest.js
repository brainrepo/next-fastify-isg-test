export default function ISGTest({ date }) {
  return <div>{date}</div>;
}

// export const config = {
//   unstable_runtimeJS: false,
// };

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const date = new Date();
  return {
    props: {
      date: date.toLocaleTimeString("it-IT", {}),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 100 seconds
    revalidate: 100, // In seconds
  };
}

import { Query, OutputFormat } from "../src/Query";

test("Fingerprint", () => {
  let query = new Query({
    format: OutputFormat.Jpeg,
    source: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/redspot.jpg",
    width: 512,
  });

  expect(query.fingerprint()).toBe(
    "eyJmb3JtYXQiOiJqcGVnIiwic291cmNlIjoiaHR0cHM6Ly93d3cubmFzYS5nb3Yvc2l0ZXMvZGVmYXVsdC9maWxlcy9zdHlsZXMvZnVsbF93aWR0aF9mZWF0dXJlL3B1YmxpYy90aHVtYm5haWxzL2ltYWdlL3JlZHNwb3QuanBnIiwid2lkdGgiOjUxMn0",
  );
});

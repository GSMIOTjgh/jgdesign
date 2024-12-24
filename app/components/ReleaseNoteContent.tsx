import React, { useEffect, useState } from "react";

interface ReleaseNote {
  id: number;
  name: string;
  tag_name: string;
  published_at: string;
  body: string;
  html_url: string;
}

const ReleaseNoteContent = () => {
  const [releaseNotes, setReleaseNotes] = useState<ReleaseNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReleaseNotes = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/GSMIOTjgh/jgdesign/releases"
        );
        if (!response.ok) { 
          throw new Error("Failed to fetch release notes");
        }
        const data = await response.json();
        setReleaseNotes(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchReleaseNotes();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading Release Notes...</p>;
  }

  if (error) {
    return <p className="text-red-500 font-semibold">Error: {error}</p>;
  }

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Release Notes</h2>
        <ul className="mt-4 list-inside">
          {releaseNotes.map((release) => (
            <li key={release.id} className="mt-2 bg-slate-100 rounded-md px-3 py-3 flex-col">
              <div className="rounded-tl-3xl rounded-br-3xl bg-blue-500 absolute w-5 h-5 my-3 right-10" />
              <div className="rounded-tr-3xl rounded-bl-3xl bg-blue-500 absolute w-5 h-5 my-3 right-10" />
              <a
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline" 
              >
                {release.name} ({new Date(release.published_at).toLocaleDateString()})
              </a>
              <p className="text-gray-700">{release.body.split("\n")[0]}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReleaseNoteContent;

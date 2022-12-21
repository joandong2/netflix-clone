import React from "react";
import { Dialog, Transition } from "@headlessui/react";

async function getMovie(id: number) {
  const res = await fetch(
    `${process.env.BASE_URL}/genre/movie/list?api_key=${process.env.IMDB_API_KEY}&language=en-USpage=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

interface Props {
  movieId: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieDetails = ({ movieId, isOpen, setIsOpen }: Props) => {
  //const movie = await getMovie(props.movie);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MovieDetails;

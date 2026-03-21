import { useState, useEffect } from "react";

export function useSecretWord() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  //Secret word
  const secretWord = "418";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      const userInput = (input + e.key).slice(-secretWord.length);
      setInput(userInput);

      if (userInput === secretWord) {
        setIsOpen(true);
        setInput("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);
  return { isOpen, setIsOpen };
}

import React, { useEffect } from "react";
import DOMPurify from "dompurify";

interface ITextWriterState {
  writtenText: string;
  index: number;
}

const TextWriter = ({ text, speed }: { text: string; speed: number }) => {
  const initialState = { writtenText: "", index: 0 };
  const sanitizer = DOMPurify.sanitize;

  const [state, setState] = React.useState<ITextWriterState>(initialState);

  useEffect(() => {
    if (state.index < text.length) {
      const animKey = setInterval(() => {
        setState((state) => {
          if (state.index > text.length - 1) {
            clearInterval(animKey);
            return { ...state };
          }
          return {
            writtenText: state.writtenText + text[state.index],
            index: state.index + 1,
          };
        });
      }, speed);

      return () => clearInterval(animKey);
    }
    // eslint-disable-next-line
  }, [state.index]);

  // Reset the state when the text is changed (Language change)
  useEffect(() => {
    setState(initialState);
    // eslint-disable-next-line
  }, [text]);

  return <span dangerouslySetInnerHTML={{ __html: sanitizer(state.writtenText) }} />;
};

export default TextWriter;

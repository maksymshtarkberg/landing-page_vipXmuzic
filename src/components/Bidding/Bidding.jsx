import React, { useState, useEffect } from "react";

import Snackbar from "@mui/material/Snackbar";
import Grow from "@mui/material/Grow";

import "./styles.css";

function GrowTransition(props) {
  return <Grow {...props} />;
}

export default function TransitionsSnackbar() {
  const [state, setState] = useState({
    open: false,
    Transition: Grow,
  });
  const [sum, setSum] = useState(1000);
  const [bid, setBid] = useState(0);
  const [svgGlow, setSvgGlow] = useState(false);
  const minBid = 200;
  const midBid = 300;
  const maxBid = 400;

  const handleClickMin = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
    setBid(minBid);
    setSum(sum + minBid);
    setSvgGlow(true);
  };
  const handleClickMid = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
    setBid(midBid);
    setSum(sum + midBid);
    setSvgGlow(true);
  };
  const handleClickMax = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
    setBid(maxBid);
    setSum(sum + maxBid);
    setSvgGlow(true);
  };

  const handleClose = () => {
    if (state.open) {
      setState({
        open: false,
      });

      setSvgGlow(false);
    }
  };

  useEffect(() => {
    if (state.open) {
      const timer = setTimeout(handleClose, 1500);
      return () => clearTimeout(timer);
    }
    setBid(0);
  }, [state.open]);

  return (
    <div className="bid">
      <svg
        className={`bid ${svgGlow ? "svg-glow" : ""}`}
        width="40"
        height="31"
        viewBox="0 0 40 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.9923 2.56055L28.345 4.22215L27.4733 9.4927L33.3705 5.96312L30.9923 2.56055Z"
          fill="#FFDE76"
        />
        <path
          d="M33.4894 9.35046L32.3433 16.3937L24.0624 17.6055L26.0317 5.67801L20.0054 0L13.979 5.67801L15.9483 17.6055L7.66747 16.3937L6.52139 9.35046L0 5.25997L2.63115 21.9606C15.3403 23.4476 20 30.221 20 30.221C20 30.221 24.6597 23.4476 37.3688 21.9606L40 5.25997L33.4894 9.35046Z"
          fill="#FFDE76"
        />
        <path
          d="M11.6602 4.22215L9.01285 2.56055L6.63458 5.96312L12.5318 9.4927L11.6602 4.22215Z"
          fill="#FFDE76"
        />
      </svg>
      <p className={`bid-ammount ${svgGlow ? "svg-glow" : ""}`}>{`$${sum}`}</p>
      <div className="big-modal">
        {state.open === true && (
          <Snackbar
            TransitionProps={{
              className: svgGlow ? "svg-glow" : "",
            }}
            open={svgGlow}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message={`+ $${bid}`}
            key={state.Transition.name}
          />
        )}
      </div>
      <div className={`bid-text_mes ${svgGlow ? "disp-op" : ""}`}>
        Your bid is already first!
      </div>
      <div className="buttons-cont">
        <button className="btn-bid" onClick={handleClickMin(GrowTransition)}>
          {`$${minBid}`}
        </button>
        <button className="btn-bid" onClick={handleClickMid(GrowTransition)}>
          {`$${midBid}`}
        </button>
        <button
          className="btn-bid no-pad"
          onClick={handleClickMax(GrowTransition)}
        >
          {`$${maxBid}`}
        </button>
      </div>
    </div>
  );
}

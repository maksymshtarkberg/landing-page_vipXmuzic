import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import "./styles.css";

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const HandleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setHide(false);
      setModalShow(true);
    }, 1200);
    setTimeout(() => {
      setHide(true);
    }, 30);
  };
  const handleClose = () => setModalShow(false);

  return (
    <div className="header-btn">
      <button
        onClick={HandleClick}
        className={`btn btn-mod ${hide ? "disp-non" : ""}`}
        type="button"
      >
        About App
      </button>
      <div className="spin-box">
        <div className={`spinner ${open ? "disp-block" : ""}`}>
          <div className="spinner1"></div>
        </div>
      </div>
      <Modal
        open={modalShow}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ overflowY: "auto", height: 600 }} className="modal">
          <CloseRoundedIcon className="modal-cross" onClick={handleClose} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
            reiciendis laboriosam necessitatibus repellat obcaecati at doloribus
            natus nulla autem provident, cupiditate quia consequuntur excepturi
            corporis aliquam aperiam veritatis architecto, molestiae recusandae
            suscipit est esse? Doloribus, necessitatibus dolor eveniet
            doloremque facilis ipsum debitis dignissimos, sapiente tempore
            dolorem ab nulla ipsa provident totam dolore consequatur omnis ea
            expedita incidunt fugit libero. Nesciunt repellendus cupiditate,
            dignissimos quia deleniti, aliquam unde error ratione minima
            asperiores quas maiores debitis fugiat voluptate qui! Officiis,
            quam. Nisi eius reprehenderit quas in. Porro quis, modi quisquam sit
            unde repellat minima earum atque possimus a voluptatum! Praesentium
            ipsam aliquam laboriosam id beatae molestiae rem possimus quod
            consequuntur, atque, exercitationem aliquid iste, ipsum autem! Porro
            quasi, debitis vel blanditiis ipsum dicta illo. Quaerat sit nemo
            quas, corrupti adipisci obcaecati, quidem quae ex, magni accusamus
            eligendi suscipit commodi cum iure temporibus laborum excepturi
            vero? Cum debitis fuga, quia dolorum atque, a quos, nam quasi sit
            ipsa ut ratione. Illo error voluptates exercitationem, nemo, facere
            quidem magni vitae nam quisquam reprehenderit veniam minus ducimus
            dignissimos quia deleniti, aliquam unde error ratione minima
            asperiores quas maiores debitis fugiat voluptate qui! Officiis,
            quam. Nisi eius reprehenderit quas in. Porro quis, modi quisquam sit
            unde repellat minima earum atque possimus a voluptatum! Praesentium
            ipsam aliquam laboriosam id beatae molestiae rem possimus quod
            consequuntur, atque, exercitationem aliquid iste, ipsum autem! Porro
            quasi, debitis vel blanditiis ipsum dicta illo. Quaerat sit nemo
            quas, corrupti adipisci obcaecati, quide dignissimos quia deleniti,
            aliquam unde error ratione minima asperiores quas maiores debitis
            fugiat voluptate qui! Officiis, quam. Nisi eius reprehenderit quas
            in. Porro quis, modi quisquam sit unde repellat minima earum atque
            possimus a voluptatum! Praesentium ipsam aliquam laboriosam id
            beatae molestiae rem possimus quod consequuntur, atque,
            exercitationem aliquid iste, ipsum autem! Porro quasi, debitis vel
            blanditiis ipsum dicta illo. Quaerat sit nemo quas, corrupti
            adipisci obcaecati, quidem quae ex, magni accusamus eligendi
            suscipit commodi cum iure temporibus laborum excepturi vero? Cum
            debitis fuga, quia dolorum atque, a quos, nam quasi sit ipsa ut
            ratione. Illo error voluptates exercitationem, nemo, facere quidem
            magni vitae nam quisquam reprehenderit veniam minus ducimusm quae
            ex, magni accusamus eligendi suscipit commodi cum iure temporibus
            laborum excepturi vero? Cum debitis fuga, quia dolorum atque, a
            quos, nam quasi sit ipsa ut ratione. Illo error voluptates
            exercitationem, nemo, facere quidem magni vitae nam quisquam
            reprehenderit veniam minus ducimus aspernatur laboriosam. Quod
            adipisci exercitationem aliquid earum nisi qui maxime mollitia,
            praesentium fugiat quaerat ipsum quis quia fugit eum maiores a
            minus, quos commodi distinctio recusandae ipsam accusamus quae
            omnis? Recusandae delectus eligendi deleniti dolorum enim. Ex, vita
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

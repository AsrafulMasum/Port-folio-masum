import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { pdfjs } from "react-pdf";
import "./experience.scss";

const variants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Experience = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    setPosition({ x, y });
  };

  const styles = {
    "--x": `${position.x}px`,
    "--y": `${position.y}px`,
  };

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  // Your PDF file URL
  // const pdfUrl = `${assignment?.pdf}`;

  const [isOpenPDF, setIsOpenPDF] = useState(false);

  const openPDFModal = () => {
    setIsOpenPDF(true);
  };

  const closePDFModal = () => {
    setIsOpenPDF(false);
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="max-w-[1080px] mx-auto mt-10 md:mt-20 p-4"
    >
      <motion.h2 variants={variants} className="text-7xl mb-10">
        Professional Courses
      </motion.h2>
      <motion.h4 variants={variants} className="border-b inline-block">
        MERN Stack Developer | | 6 Months
      </motion.h4>
      <motion.p variants={variants} className="my-10">
        I possess comprehensive proficiency in web development using MongoDB,
        Express.js, React.js, and Node.js. With expertise in both front-end and
        back-end technologies & excel in building dynamic and responsive web
        applications. My experience involves leveraging MongoDB for efficient
        data storage, Express.js to create robust server-side applications,
        React.js for building interactive user interfaces, and Node.js to handle
        server-side logic and connections. My responsibilities often encompass
        designing, developing, testing, and deploying full-stack applications
        while ensuring seamless integration between various components of the
        MERN stack, thus contributing to the creation of modern, scalable, and
        feature-rich web solutions.
      </motion.p>
      <motion.button
        variants={variants}
        onMouseMove={handleMouseMove}
        style={styles}
        className="btn"
        onClick={openPDFModal}
      >
        <span>See Certificate</span>
      </motion.button>

      {/* pdf model */}
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        open={isOpenPDF}
        onClose={closePDFModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-middle p-6 my-8 text-left bg-[#111132] shadow-xl transform transition-all sm:my-12 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-white"
            >
              Certificate
            </Dialog.Title>
            <div className="mt-2">
              <iframe
                title="PDF Viewer"
                src="/PHcertificate.pdf"
                width="100%"
                height="400px"
              />
            </div>
            <div className="mt-4">
              <button
                onClick={closePDFModal}
                onMouseMove={handleMouseMove}
                style={styles}
                className="btn"
              >
                <span>Close Modal</span>
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </motion.div>
  );
};

export default Experience;

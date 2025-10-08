import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
};

export default function ImageModal({ isOpen, onClose, imageUrl, alt }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}>
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[95vw] max-h-[95vh] mx-2"
            onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-0 -top-12 z-10 p-3 rounded-full transition-colors duration-200 cursor-pointer bg-white/10 hover:bg-white/20">
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div className="overflow-hidden relative rounded-2xl shadow-2xl">
              <Image
                src={imageUrl}
                alt={alt}
                width={1600}
                height={1200}
                className="w-full h-auto max-h-[90vh] object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

function ImageGrid({ setSelectedImg }) {

    const { docs } = useFirestore('images');
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap"
                    whileHover={{ opacity: 1 }}
                    layout
                    key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}>
                    <motion.img src={doc.url}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{delay:0.8}}
                        alt={doc.id} />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid

import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  DetailedTextContainer,
  SectionContainer,
  SectionTitle,
  CodeBlock,
  Description,
} from "./detailedTextBlockStyled";
import info from "../../assets/text/information.json";

const DetailedTextBlock = ({ language }) => {
  const [openSections, setOpenSections] = useState({});

  const lang = info.detailedTextBlock[language] ? language : "fr";

  const toggleSection = useCallback((index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index], // ✅ Toggle the clicked section
    }));
  }, []);

  return (
    <DetailedTextContainer>
      {info.detailedTextBlock[lang]?.map((section, index) => {
        const isOpen = openSections[index];

        return (
          <SectionContainer key={index}>
            {/* ✅ Motion title with hover animation */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <SectionTitle
                onClick={() => toggleSection(index)}
                aria-expanded={isOpen} // ✅ Accessibility
              >
                {section.title}
              </SectionTitle>
            </motion.div>
            <motion.div
              initial={false} // ✅ Prevents initial collapse animation
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <CodeBlock>{section.code}</CodeBlock>
              <Description>{section.description}</Description>
            </motion.div>
          </SectionContainer>
        );
      })}
    </DetailedTextContainer>
  );
};

// ✅ PropTypes validation
DetailedTextBlock.propTypes = {
  language: PropTypes.string.isRequired,
};

export default DetailedTextBlock;

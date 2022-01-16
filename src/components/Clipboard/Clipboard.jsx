import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

import Box from "@material-ui/core/Box";

import Tooltip from "@material-ui/core/Tooltip";

//const useStyles = makeStyles();
const Clipboard = ({ url }) => {
  const [copiedText, setCopiedText] = React.useState();

  return (
    <>
      <CopyToClipboard text={url} onCopy={() => setCopiedText(url)}>
        <Tooltip
          title={
            copiedText === { url } ? "This was Copied!" : "Copy To Clipboard"
          }
          placement="top"
        >
          <Box
            component="button"
            fontFamily="inherit"
            fontSize="16px"
            fontWeight="400"
            lineHeight="1.25"
            display="inline-block"
            width="100%"
            margin=".5rem 0"
            padding="24px"
            textAlign="left"
            border="0"
            borderRadius="4px"
            data-clipboard-text="album-2"
            type="button"
          >
            <div>
              <span>
                {copiedText?.length > 0 ? "Text Copied" : "Copy to clipboard"}
              </span>
            </div>
          </Box>
        </Tooltip>
      </CopyToClipboard>
    </>
  );
};

export default Clipboard;

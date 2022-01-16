import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Typography from "@mui/material/Typography";
import Clipboard from "../Clipboard/Clipboard";

export default function Cards({ post }) {
  const [like, setLike] = React.useState(false);
  const addLike = () => {
    setLike(!like);
  };
  return (
    <Card sx={{ maxWidth: 500 }} classes={{ root: "card" }}>
      <CardMedia
        component="img"
        alt={post.title}
        height="400"
        image={post.hdurl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography paragraph>{post.explanation}</Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="left"
          classes={{ root: "copyright" }}
        >
          {post.copyright ? `Copyright © ${post.copyright}` : "Anonymous"}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {post.date}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            classes={{ root: like ? "like" : "" }}
            onClick={addLike}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Clipboard url={post.hdurl} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

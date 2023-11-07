import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material"

export default function ActionAreaCard(props) {
  let carddata = props.allnewsdata.articles;
  return (
      carddata?.map((item, index) => {
        return (
          <Card sx={{maxWidth: 345, height:400, margin:2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.urlToImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
        );
      })
    
  );
}

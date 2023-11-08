import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material"
import CardSkeletonList from "../skeleton/Cardskeletonlist";

export default function ActionAreaCard(props) {
  let carddata = props.allnewsdata.articles;

  function truncate(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  }
  return (
    <div className="App2">
      {props.loading==false?
      carddata?.map((item, index) => {
        return (
          <Card sx={{maxWidth: 345, height:400, margin:2 }} >
            <CardActionArea onClick={()=>window.open(item.url, '_blank')}>
              <CardMedia
                component="img"
                height="140"
                image={item.urlToImage}
                alt="green iguana"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {truncate(item.title,30)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
        );
      })
      :
      <CardSkeletonList/>
    }
    </div>
  );
}

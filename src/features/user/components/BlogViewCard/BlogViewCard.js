import "./BlogViewCard.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const BlogViewCard=()=>{
  return(
    <Card sx={{ maxWidth: 370 }}>
    <CardMedia
      component="img"
      height="255"
      image={process.env.PUBLIC_URL + "/asset/image/blog-view1.png"}
      alt="blog-image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Top esssential Trends in 2021
      </Typography>
      <Typography variant="body2" color="text.secondary">
        More off this less hello samlande lied much over tightly circa
        horse taped mightly{" "}
      </Typography>
      <Button size="small">Read More</Button>

    </CardContent>

  </Card>
  )
}

export default BlogViewCard;
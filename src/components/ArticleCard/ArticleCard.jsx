import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import {Button} from "@mui/material";


export const ArticleCard = ({title, imgUrl, summary}) => {

    return (
        <div className="article-card-box">
        <Card className={"article-card"} sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="140"
                image={imgUrl}
                alt="green iguana"
            />
            <CardContent>
                <Typography className={"article-card-title"} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography className={"article-card-summary"} variant="body2" color="text.secondary">
                    {summary}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </div>
    )
}
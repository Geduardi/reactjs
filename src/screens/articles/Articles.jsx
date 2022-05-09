import {selectArticles, selectFailure, selectStatus} from "../../store/articles/selectors";
import {useDispatch, useSelector} from "react-redux";
import {getArticlesRequest} from "../../store/articles/actions";
import {useEffect} from "react";
import {Alert, Button, CircularProgress} from "@mui/material";
import {FETCH_STATUSES} from "../../utils/constants";
import {ArticleCard} from "../../components/ArticleCard/ArticleCard";
import "./Articles.css"

export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const status = useSelector(selectStatus);
    const error = useSelector(selectFailure);
    const sendRequest = () => {
        dispatch(getArticlesRequest())
    }

    useEffect(()=>{
        sendRequest()
    },[])

    return (<>
        <Button onClick={()=>sendRequest()} variant={"outlined"} sx={{width:'100%'}}>Refresh</Button>
        {status === FETCH_STATUSES.REQUEST && <CircularProgress sx={{position:"absolute", top:"48vh",left:"48vw",zIndex:"10"}} />}
        {error && <Alert severity={"error"}>{error}</Alert>}
        <div className="articles-box">
            {articles.map((article) =>
                <ArticleCard key={article.id} title={article.title} imgUrl={article.imageUrl} summary={article.summary}/>
            )}
        </div>
    </>)
}
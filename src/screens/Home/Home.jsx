export const Home = ({authTrigger}) => {
    return (
        <>
            <h4>Домашняя страница</h4>
            <button onClick={() => authTrigger()}>Смена авторизации</button>
        </>
    )
}
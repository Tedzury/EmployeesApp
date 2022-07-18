import './app-info.css'

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотруников в компании ZalupaDrive</h1>
            <h2>Общее число сотруников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;
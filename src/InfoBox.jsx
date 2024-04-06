import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    
    const HOT_URL= "https://media.istockphoto.com/id/1903016155/photo/sunset-sky-on-twilight-in-the-evening-with-orange-gold-sunset-clouds.webp?b=1&s=170667a&w=0&k=20&c=fOGB7_F3tuNjI7bQbBxW8fcMRbSKeEPUi-w3XPD4pKk=";
    const COLD_URL= "https://media.istockphoto.com/id/185325220/photo/winter-branch-covered-with-snow.jpg?s=612x612&w=0&k=20&c=_yIUpphCyShalCl-SKUN__pIGUj51Xkoe5Klfo-l0H4=";
    const RAIN_URL= "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <h1>Weather Info</h1>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image= {info.humidity > 80? RAIN_URL: (info.temp > 25)? HOT_URL: COLD_URL}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity > 80? <ThunderstormIcon/> : (info.temp > 25)? <LightModeIcon/>: <AcUnitIcon/>}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="span">
                    <p>Temp {info.temp}&deg;C / {info.weather}</p>
                    <p>humidity {info.humidity}</p>
                    <p>feelsLike {info.feels_like}</p>
                    <span>Temp_Min {info.tempMin}</span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <span>Temp_Max {info.tempMax}</span>
                  </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
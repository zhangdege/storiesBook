import { InfoWindow, Map, Marker, NavigationControl } from 'react-bmapgl';
interface MapProps {

}
const BaiduMap: React.FC<MapProps> = () => {
  return ( <div>
    <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11">
      <Marker position={{ lng: 116.402544, lat: 39.928216 }} icon={undefined} map={undefined} />
      <NavigationControl map={undefined} />
      <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} text="我们的位置" title="Hello" map={undefined} />
    </Map>
  </div>
  )
}
export default BaiduMap
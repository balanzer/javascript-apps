export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };

    markerContent(): string;


}

export class CustomMap {

    private googleMap: google.maps.Map;

    constructor(elementID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elementID) as HTMLElement, {
            zoom: 2,
            center: {lat: 39.0997, lng: -94.5786}
        });
    }

    addMaker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener("click", () => {
            const info = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            info.open(this.googleMap, marker)
        })
    }

}
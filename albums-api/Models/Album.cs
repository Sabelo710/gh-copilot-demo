namespace albums_api.Models
{
    public record Album(int Id, string Title, string Artist, int year, double Price, string Image_url, string Genre)
    {
        public static List<Album> GetAll()
        {
            var albums = new List<Album>() {
            new Album(1, "You, Me and an App Id", "Daprize", 2022, 10.99, "https://aka.ms/albums-daprlogo", "Techno"),
            new Album(2, "Seven Revision Army", "The Blue-Green Stripes", 2021, 13.99, "https://aka.ms/albums-containerappslogo", "Rock"),
            new Album(3, "Scale It Up", "KEDA Club", 2020, 13.99, "https://aka.ms/albums-kedalogo", "Electronic"),
            new Album(4, "Lost in Translation", "MegaDNS", 2019, 12.99,"https://aka.ms/albums-envoylogo", "Pop"),
            new Album(5, "Lock Down Your Love", "V is for VNET", 2018, 12.99, "https://aka.ms/albums-vnetlogo", "Indie"),
            new Album(6, "Sweet Container O' Mine", "Guns N Probeses", 2017, 14.99, "https://aka.ms/albums-containerappslogo", "Classic Rock")
         };

            return albums;
        }

        public static Album? GetById(int id)
        {
            return GetAll().FirstOrDefault(album => album.Id == id);
        }
    }
    
}

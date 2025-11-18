using albums_api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Text.Json;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace albums_api.Controllers
{
    [Route("albums")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
        // GET: api/album
        [HttpGet]
        public IActionResult Get()
        {
            var albums = Album.GetAll();

            return Ok(albums);
        }
        // GET api/<AlbumController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var album = Album.GetById(id);
            if (album == null)
            {
            return NotFound();
            }
            return Ok(album);
        }

        // GET: albums/sort?by=name|artist|genre
        [HttpGet("sort")]
        public IActionResult Sort([FromQuery] string by)
        {
            var albums = Album.GetAll();
            switch (by?.ToLower())
            {
                case "name":
                    albums = albums.OrderBy(a => a.Title).ToList();
                    break;
                case "artist":
                    albums = albums.OrderBy(a => a.Artist).ToList();
                    break;
                case "genre":
                    albums = albums.OrderBy(a => a.Genre).ToList();
                    break;
                default:
                    return BadRequest("Invalid sort parameter. Use 'name', 'artist', or 'genre'.");
            }
            return Ok(albums);
        }
    }
}
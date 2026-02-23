using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Endpoints : ControllerBase
    {
        private List<EventRequestBody> events;
        private readonly ILogger<Endpoints> _logger;

        public Endpoints(ILogger<Endpoints> logger)
        {
            _logger = logger;
        }

        [HttpPost(Name = "newEvent")]
        public void NewEvent(EventRequestBody request)
        {
            events.Add(request);
        }

        [HttpGet(Name = "getEvents")]
        public EventResponseBody GetEvent() {
            return new EventResponseBody(events);
        }
    }
}

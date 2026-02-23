using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Controller(ILogger<Controller> logger) : ControllerBase
    {
        private readonly List<EventRequestBody> events = [];
        private readonly ILogger<Controller> _logger = logger;

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

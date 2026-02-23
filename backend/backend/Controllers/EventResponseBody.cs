namespace backend.Controllers
{
    public class EventResponseBody
    {
        public EventResponseBody(List<EventRequestBody> events)
        {
            Events = events;
        }

        public List<EventRequestBody> Events { get; set; } = [];
    }
}

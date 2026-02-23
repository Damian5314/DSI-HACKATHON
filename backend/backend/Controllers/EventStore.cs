namespace backend.Controllers
{
    public class EventStore
    {
        private Dictionary<EventId, Event> events = [];
    }

    public record EventId(int id);

    public class Event
    {

    }
}

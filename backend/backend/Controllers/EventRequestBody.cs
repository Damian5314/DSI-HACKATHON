namespace backend.Controllers
{
    public class EventRequestBody
    {

        public string EventName { get; set; } = string.Empty;
        public string EventDescription { get; set; } = string.Empty;
        public int X { get; set; } = 0;
        public int Y { get; set; } = 0;
    }
}

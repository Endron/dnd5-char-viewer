package charViewer.charakter;

import java.util.ArrayList;
import java.util.EnumMap;
import java.util.List;
import java.util.Map;

import static java.util.UUID.randomUUID;

public class Character {

    public final String id = randomUUID().toString();
    public String name;
    public List<CharacterClass> classes = new ArrayList<>();

    public Map<Attribute, Integer> attributes = new EnumMap<>(Attribute.class);
    public String icon = "fa-user";
}

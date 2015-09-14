package charViewer.charakter;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import static java.util.Arrays.asList;
import static org.junit.Assert.assertEquals;

@RunWith(Parameterized.class)
public class CharacterProficencyBonusTest {

    @Parameterized.Parameter(1)
    public int bonus;

    @Parameterized.Parameter
    public int level;

    @Test
    public void calcProficencyBonus() {
        assertEquals(bonus, characterWithLevel(level).getProficiencyBonus());
    }

    private Character characterWithLevel(int level) {
        final Character character = new Character();
        character.getClasses().add(new CharacterClass("dummy", level));

        return character;
    }

    @Parameterized.Parameters
    public static Iterable<Object[]> data() {
        return asList(new Object[][] {
                {1, 2}, {2, 2}, {3, 2}, {4, 2},
                {5, 3}, {6, 3}, {7, 3}, {8, 3},
                {9, 4}, {10, 4}, {11, 4}, {12, 4},
                {13, 5}, {14, 5}, {15, 5}, {16, 5},
                {17, 6}, {18, 6}, {19, 6}, {20, 6}
        });
    }
}

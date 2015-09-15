package charViewer.charakter

import groovy.transform.Immutable
import groovy.transform.ToString
import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.Parameterized

import static org.junit.Assert.assertEquals

@RunWith(Parameterized.class)
public class CharacterProficiencyBonusTest {

    @Immutable
    @ToString(includeNames = true, includePackage = false)
    private static class TestData {
        int level
        int bonus
    }

    @Parameterized.Parameter
    public TestData data

    @Test
    void calcProficiencyBonus() {
        final character = new Character(
                classes: [new CharacterClass(name: "dummy", level:  data.level)]
        )

        assertEquals data.bonus, character.getProficiencyBonus()
    }

    @Parameterized.Parameters(name = '{index}: {0}')
    static List<TestData> testData() {
        return [
                new TestData(level: 1, bonus: 2),
                new TestData(level: 2, bonus: 2),
                new TestData(level: 3, bonus: 2),
                new TestData(level: 4, bonus: 2),
                new TestData(level: 5, bonus: 3),
                new TestData(level: 6, bonus: 3),
                new TestData(level: 7, bonus: 3),
                new TestData(level: 8, bonus: 3),
                new TestData(level: 9, bonus: 4),
                new TestData(level: 10, bonus: 4),
                new TestData(level: 11, bonus: 4),
                new TestData(level: 12, bonus: 4),
                new TestData(level: 13, bonus: 5),
                new TestData(level: 14, bonus: 5),
                new TestData(level: 15, bonus: 5),
                new TestData(level: 16, bonus: 5),
                new TestData(level: 17, bonus: 6),
                new TestData(level: 18, bonus: 6),
                new TestData(level: 19, bonus: 6),
                new TestData(level: 20, bonus: 6)
        ]
    }
}

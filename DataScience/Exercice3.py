from mrjob.job import MRJob
from mrjob.step import MRStep
import string
import re

WORD_REGEXP = re.compile(r"[\w']+")

class MRMostFreqWord(MRJob):
    def steps(self):
        return [
            MRStep(mapper=self.mapper_wordcount,
                    reducer=self.reducer_wordcount),
            MRStep(mapper=self.mapper_getfreq,
                    reducer=self.reducer_getfreq)
        ]

    def mapper_wordcount(self, _, line):
        words = WORD_REGEXP.findall(line)
        for w in words:
            yield w.lower(), 1

    def reducer_wordcount(self, word, counts):
        yield word, sum(counts)  # Sum occurrences of each word to get frequency

    def mapper_getfreq(self, word, total):
        yield len(word), [total, word]

    def reducer_getfreq(self, lengroup, total):
        yield lengroup, max(total)


if __name__ == '__main__':
    try:
        MRMostFreqWord.run()
    except TypeError:
        print 'MrJob cannot work inside iPython Notebook as it is not saved as a standalone .py file'

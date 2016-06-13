from mrjob.job import MRJob
from mrjob.step import MRStep
import string
import re

WORD_REGEXP = re.compile(r"[\w']+")

class MRMostFreqWord(MRJob):
    def steps(self):
        return [
            MRStep(mapper=self.mapper_wordcount_byletter,
                    reducer=self.reducer_wordcount_byletter),
            MRStep(mapper=self.mapper_getmaxmin,
                    reducer=self.reducer_getmaxmin)
        ]

    def mapper_wordcount_byletter(self, _, line):
        words = WORD_REGEXP.findall(line)
        for w in words:
            yield w.lower()[0], 1

    def reducer_wordcount_byletter(self, word, counts):
        yield word, sum(counts)  # Sum occurrences of each word to get frequency

    def mapper_getmaxmin(self, word, final):
        yield 'most used', [final, word]

    def reducer_getmaxmin(self, _, freqs):
        yield 'most used', max(freqs)

if __name__ == '__main__':
    try:
        MRMostFreqWord.run()
    except TypeError:
        print 'MrJob cannot work inside iPython Notebook as it is not saved as a standalone .py file'

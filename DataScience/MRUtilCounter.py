from mrjob.job import MRJob


class MRCcounter(MRJob):

    def mapper(self, key, value):
        for phrase in value.split('.')[:-1]:
            yield 'phrase', 1
            for word in phrase.split(' '):
                yield 'word', 1
                yield 'characters', len(word)



    def reducer(self, key, values):
        yield key, sum(values)


if __name__=='__main__':
    MRCcounter.run()

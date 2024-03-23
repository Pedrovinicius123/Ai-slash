import numpy as np
import random
import math

from time import sleep

from joblib import Parallel, delayed
from dataclasses import dataclass

class Model:

    @dataclass
    class shortmem:
        data: int

        def add(self, data):
            self.data += data

        def return_mem(self):
            return self.data

    def __init__(self, i, j):

        """
        The model of the system, doesn't require perceptrons,
        doesn't require layers.

        Only the dimentions of the mini brain

        :params:
        self --> constructor
        dimentions --> dimentions of the matrix        
        """

        self.dim = (i, j)
        self.itter = 0
        self.dist = np.array([[
                random.uniform(0,1) for i in range(self.dim[1])
            ] for i in range(self.dim[0])
        ])

        self.mem = self.dist

    def show_matrix(self):

        """
        Shows how the brain is going
        """

        return self.dist

    def process(self, data:np.ndarray):

        """
        Makes the process advance, using the data and the iteration
        index

        :params:
        data : np.ndarray
        iterations : int
        """

        short_mem = self.shortmem(0)

        results = Parallel(n_jobs=-1)(delayed(self.chose_sinapsis)(x) for x in data)
        
        for result in results:

            short_mem.add(result[0])
            self.mem[result[1], result[2]] = math.sqrt(short_mem.return_mem())

        return self.dist

    def optimize(self, y_pred, y_true, procs):
        for i in range(procs):
            result = brain.process([1, 2])



    def chose_sinapsis(self, data):
        j = random.randint(1, self.dim[1]-1)        
        i = random.randint(1, self.dim[0]-1)

        return data * self.dist[i, j], i ,j

brain = Model(10, 10)
mtrx = brain.show_matrix()


